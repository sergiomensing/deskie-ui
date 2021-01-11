import { ChangeEvent, forwardRef, PropsWithChildren, SelectHTMLAttributes, useImperativeHandle, useRef } from 'react';
import SelectContainer, { SelectContainerProps } from './SelectContainer';

export type SelectProps = SelectContainerProps &
  Omit<SelectHTMLAttributes<unknown>, 'onChange'> & {
    onChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
  };

const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>(
  (
    { disabled = false, icon, status = 'default', children, className, ...rest },
    ref: React.Ref<HTMLSelectElement | null>,
  ) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    useImperativeHandle(ref, () => selectRef.current);

    return (
      <SelectContainer className={className} icon={icon} disabled={disabled} status={status}>
        <select ref={selectRef} disabled={disabled} {...rest}>
          {children}
        </select>
      </SelectContainer>
    );
  },
);

export default Select;
