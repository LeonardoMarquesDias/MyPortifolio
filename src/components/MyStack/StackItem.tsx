import { ReactNode } from 'react';
import { StackContainer } from './styles';

interface StackItemProps {
  title: string;
  icon: ReactNode;
}

export default function StackItem({ title, icon }: StackItemProps) {
  return (
    <StackContainer>
      <p>{title}</p>
      {icon}
    </StackContainer>
  );
}