import styled from 'styled-components';
import { Button } from '../Button';
import type { DialogProps } from './Dialog';

export type DialogFooterProps = {
  actions: DialogProps['actions'];
};

const StyledDialogFooter = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  margin: 0 -0.5rem;
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.colors.background};

  .button {
    margin: 0 0.5rem;
    width: 100%;
  }
`;

function DialogFooter({ actions }: DialogFooterProps) {
  return (
    <StyledDialogFooter className="dialog-footer">
      {actions?.map((action, index) => (
        <Button key={index} appearance={action.appearance || 'default'} onClick={() => action.onClick()}>
          {action.label}
        </Button>
      ))}
    </StyledDialogFooter>
  );
}

export default DialogFooter;
