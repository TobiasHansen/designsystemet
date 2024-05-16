import { Button, Divider, Label } from '@digdir/designsystemet-react';
import styles from './styles.module.css';

export const Buttons = ({
  variant,
}: {
  variant: 'primary' | 'secondary' | 'tertiary';
}) => {
  const colors = ['first', 'second', 'success', 'danger'];
  return (
    <div className={styles.container}>
      <Label>{variant}</Label>
      {colors.map((color) => (
        <ButtonTest
          key={`${color}${variant}`}
          variant={variant}
          color={color}
        />
      ))}
      <Divider />
    </div>
  );
};

const ButtonTest = ({
  variant,
  color,
}: {
  variant: 'primary' | 'secondary' | 'tertiary';
  color: 'first' | 'second' | 'success' | 'danger';
}) => {
  return (
    <div className={styles.buttonsContainer}>
      <Button
        variant={variant}
        color={color}
      >
        Button
      </Button>
      <Button
        variant={variant}
        color={color}
        disabled
      >
        Button
      </Button>
    </div>
  );
};
