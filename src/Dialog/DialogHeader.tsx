import styled from 'styled-components';
import { Text } from '../Text';
import { Button } from '../Button';
import { Close } from '@styled-icons/material-outlined';

export type DialogHeaderProps = {
  title?: string;
  onClose: () => void;
};

const StyledDialogHeader = styled.div`
  padding: 1rem 1rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};

  .button {
    margin-left: auto;
  }
`;

function DialogHeader({ title, onClose }: DialogHeaderProps) {
  return (
    <StyledDialogHeader className="dialog-header">
      <Text className="dialog-title" h2>
        {title}
      </Text>
      <Button size="small" appearance="secondary" icon={<Close />} onClick={onClose} />
    </StyledDialogHeader>
  );
}

export default DialogHeader;
