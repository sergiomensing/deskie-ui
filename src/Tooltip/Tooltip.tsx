import { Children, PropsWithChildren, useState, HTMLAttributes, cloneElement } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

type Placement = 'top' | 'bottom' | 'right' | 'left';

const StyledTooltip = styled.div<{ isOpen: boolean; placement: Placement }>`
  .tooltip {
    display: flex;
    flex-direction: column;
    background-color: #11142d;
    color: ${(props) => props.theme.colors.labelInverted};
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.3px 0.3px -4px rgba(0, 0, 0, 0.081), 0 1.1px 2px -4px rgba(0, 0, 0, 0.119),
      0 5px 10px -4px rgba(0, 0, 0, 0.2);

    transform: scale(0.8);
    transform-origin: center;
    opacity: 0;
    transition: 0.2s cubic-bezier(0.45, 0, 0.21, 1);

    ${(props) =>
      props.isOpen &&
      `
    transform: scale(1);
    opacity: 1;
  `}
  }
`;

type TooltipProps = HTMLAttributes<unknown> & {
  content: React.ReactNode;
  placement?: Placement;
};

function Tooltip({
  children,
  content,
  placement = 'bottom',
  className = '',
  ...rest
}: PropsWithChildren<TooltipProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  const renderTarget = () => {
    const target = Children.only(children);

    // @ts-ignore
    return cloneElement(target, {
      ref: setReferenceElement,
      onMouseEnter: () => window.innerWidth >= 1024 && setIsOpen(true),
    });
  };

  return (
    <StyledTooltip
      placement={placement}
      isOpen={isOpen}
      className={`tooltip-container ${className}`}
      {...rest}
      onMouseLeave={() => setIsOpen(false)}
    >
      {renderTarget()}
      <div
        ref={setPopperElement}
        style={{ ...styles.popper, zIndex: 99, pointerEvents: 'none' }}
        {...attributes.popper}
      >
        <div className="tooltip">{content}</div>
      </div>
    </StyledTooltip>
  );
}

export default Tooltip;
