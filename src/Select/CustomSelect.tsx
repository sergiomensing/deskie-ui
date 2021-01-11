import { useState, useCallback, useRef, useEffect, ChangeEventHandler, KeyboardEventHandler } from 'react';
import SelectContainer, { SelectContainerProps } from './SelectContainer';
import styled from 'styled-components';
import { useClickAway } from '../useClickAway';

export type CustomSelectProps = SelectContainerProps & {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  options: CustomSelectOption[];
  multiple?: boolean;
  className?: string;
  placeholder?: string;
  searchable?: boolean;
  noOptionsLabel?: string;
};

export type CustomSelectOption = {
  label?: string;
  value: string;
};

const StyledCustomSelect = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 100%;

  .select-options {
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
    background: ${(props) => props.theme.colors.inputBackground};
    box-shadow: ${(props) => props.theme.elevation[1]};
    border-radius: 0.5rem;
    padding: 0.5rem 0;
  }

  .select-option {
    padding: 0.75rem 0.75rem;
    cursor: pointer;

    &.selected {
      background: ${(props) => props.theme.colors.accent2};
    }

    &.current {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    }
  }

  .select {
    display: flex;
    align-items: center;
  }

  .select-placeholder {
    color: ${(props) => props.theme.colors.accent8};
  }

  .select-search {
    display: block;
    width: calc(100% - 1.5rem);
    outline: none;
    font: inherit;
    transform: translateX(0px) translateY(-1px);
    position: absolute;
    height: calc(2.5rem);
    border: 0;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    pointer-events: ${(props) => (props.isActive ? 'initial' : 'none')};
    background: ${(props) => props.theme.colors.background};

    &.select-search-empty {
      background: transparent;
    }
  }

  .select-no-options {
    color: ${(props) => props.theme.colors.accent8};
    padding: 0.75rem 0.75rem;
  }
`;

function CustomSelect({
  options,
  onChange,
  placeholder,
  searchable,
  value,
  disabled,
  noOptionsLabel = 'No options found',
  className,
  icon,
  status,
}: CustomSelectProps) {
  const _value = value ? value.toString() : undefined;
  const [active, setActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const filteredOptions = searchable
    ? options.filter((option) => option.value.toString().includes(searchValue))
    : options;

  const _selected =
    searchValue.length > 0 && filteredOptions.length > 0
      ? filteredOptions[0].value
      : selected
      ? selected
      : value
      ? value
      : undefined;

  const handleChange = useCallback(
    (option: CustomSelectOption) => {
      setActive(false);
      setSearchValue('');
      setSelected(undefined);
      onChange(option.value);
    },
    [options],
  );

  const handleSetActive = () => {
    if (!disabled) {
      setActive(searchable ? true : !active);
      if (searchable && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelected(undefined);
    setSearchValue(event.target.value);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const index = options.findIndex((o) => o.value === _selected);
      if (options[index + 1]) {
        setSelected(options[index + 1].value);
      }
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      const option = options.find((o) => o.value === _selected);
      if (option) {
        handleChange(option);
      }
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const index = options.findIndex((o) => o.value === _selected);
      if (options[index - 1]) {
        setSelected(options[index - 1].value);
      }
    }
  };

  useClickAway(selectRef, () => {
    setActive(false);
    setSearchValue('');
    setSelected(undefined);
  });

  useEffect(() => {
    if (active) {
      document.addEventListener('keyup', handleKeyUp);

      return () => {
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [active, selected]);

  return (
    <SelectContainer className={className} icon={icon} disabled={disabled} status={status}>
      <StyledCustomSelect className="custom-select" ref={selectRef} isActive={active}>
        <div className="select" onClick={handleSetActive}>
          {searchable && (
            <input
              className={`select-search ${searchValue.length === 0 ? 'select-search-empty' : ''}`}
              value={searchValue}
              onChange={handleSearch}
              ref={searchInputRef}
            />
          )}
          {_value ? (
            <span className="select-value">{_value}</span>
          ) : (
            <span className="select-placeholder">{placeholder}</span>
          )}
        </div>
        <div
          className="select-options"
          style={{
            opacity: active ? 1 : 0,
            pointerEvents: active ? 'initial' : 'none',
            // transform: active ? 'translateY(0px)' : 'translateY(-0.5rem)',
          }}
        >
          {filteredOptions.length === 0 && <div className="select-no-options">{noOptionsLabel}</div>}
          {filteredOptions.map((option) => (
            <div
              onMouseEnter={() => setSelected(option.value)}
              className={`select-option ${option.value === _selected ? 'selected' : ''} ${
                value === option.value ? 'current' : ''
              } `}
              onClick={() => handleChange(option)}
              key={option.value}
            >
              {option.label || option.value}
            </div>
          ))}
        </div>
      </StyledCustomSelect>
    </SelectContainer>
  );
}

export default CustomSelect;
