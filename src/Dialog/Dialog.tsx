import { PropsWithChildren, useEffect, useRef } from 'react';
import type { ButtonAppearance } from '../Button/Button';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export type DialogProps = {
  title?: string;
  className?: string;
  open?: boolean;
  onClose?: () => void;
  showHeader?: boolean;
  width?: number;
  disablePadding?: boolean;
  actions?: {
    appearance?: ButtonAppearance;
    label: string;
    onClick: () => void;
  }[];
};

const StyledDialog = styled.div<{ open: boolean; disablePadding: boolean; width: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${(props) => (props.open ? 'initial' : 'none')};
  display: flex;
  justify-content: center;
  padding: 5vh 0;
  z-index: 999;

  @media screen and (max-width: ${(props) => props.width}) {
    padding: 10vh 0;
  }

  .dialog-underlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => `${props.theme.colors.foreground}B3`};
    cursor: pointer;
    z-index: 1;
    will-change: opacity;
  }

  .dialog-wrapper {
    position: relative;
    touch-action: none;
    position: relative;
    z-index: 2;
    margin-top: auto;
    margin-bottom: auto;
    min-height: 10rem;
    width: min(100%, ${(props) => props.width});

    @media screen and (max-width: ${(props) => props.width}) {
      margin-bottom: 0;
    }
  }

  .dialog {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.background};
    box-shadow: ${(props) => props.theme.elevation[2]};
    border-radius: 1rem;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overflow-y: auto;
    overflow-x: hidden;
    will-change: transform opacity;

    @media screen and (max-width: ${(props) => props.width}) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .dialog-content {
    padding: ${(props) => (props.disablePadding ? '0' : '0.5rem 1.5rem')};
  }
`;

function Dialog({
  showHeader = true,
  disablePadding = false,
  open = false,
  width = 560,
  title,
  actions,
  children,
  className = ``,
  onClose,
}: PropsWithChildren<DialogProps>) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const maxHeight = window.innerHeight * 0.9;
  const drawer = window.innerWidth <= width;

  function handleClose() {
    if (onClose) {
      onClose();
    }
  }

  const closedY = drawer ? maxHeight : 32;
  const openY = 0;

  const [{ y }, set] = useSpring<{ y: number }>(() => ({ y: closedY }));

  useEffect(() => {
    set({ y: open ? openY : closedY, immediate: false });
  }, [open]);

  const bind = useGesture(
    {
      // onScroll: ({ vxvy: [, vy], last, event, movement: [, my] }) => {
      // if (my < 0 && y.getValue() !== openY && !last) {
      //   const node = event.currentTarget as Element;
      //   node.scrollTop = 0;
      // }
      // if (last && vy < -5) {
      // Do something with the projected endpoint
      // handleClose();
      // }
      // },
      onDrag: ({ delta: [, dy], event, last, vxvy: [, vy], memo }) => {
        let _memo = (memo as number) || 0;
        const node = event.currentTarget as Element;

        if (node && (node.scrollTop <= 0 || y.getValue() !== openY)) {
          _memo = _memo + dy;
          if (last) {
            if (Math.abs(_memo) > closedY / 3 || vy > 2) {
              handleClose();
            } else {
              set({ y: openY, immediate: false });
            }
          } else {
            set({ y: Math.max(openY, _memo), immediate: true });
          }
        }

        return _memo;
      },
    },
    { drag: { useTouch: true, filterTaps: true } },
  );

  return (
    <StyledDialog
      width={`${width}px`}
      disablePadding={disablePadding}
      open={open}
      className={`dialog-container ${className}`}
    >
      <animated.div
        className="dialog-underlay"
        onClick={() => handleClose()}
        style={{ opacity: y.interpolate({ range: [openY, closedY], output: [1, 0] }) }}
      />
      <animated.div
        className="dialog-wrapper"
        style={{
          opacity: drawer ? 1 : y.interpolate({ range: [openY, closedY], output: [1, 0] }),
          transform: y.interpolate((y) => `translateY(${y}px)`),
        }}
      >
        <div ref={dialogRef} {...bind()} className="dialog" style={{ maxHeight: maxHeight }}>
          {showHeader && <DialogHeader title={title} onClose={handleClose} />}
          <div className="dialog-content">{children}</div>
          {actions && <DialogFooter actions={actions} />}
        </div>
      </animated.div>
    </StyledDialog>
  );
}

export default Dialog;
