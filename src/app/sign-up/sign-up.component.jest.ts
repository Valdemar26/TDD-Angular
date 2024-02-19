import { render, screen} from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';
import { userEvent } from '@testing-library/user-event/setup/index';

it('has Sign Up header', async () => {
  await render(SignUpComponent);
  const header = screen.getByRole('heading', { name: 'Sign Up' });
  expect(header).toBeInTheDocument();
});

describe('Interactions', () => {
  it('enables the button when all the fields have valid input', async() => {
    const button = screen.getByRole('button', { name: 'Sign Up' });

    await render(SignUpComponent);
    const password = screen.getByLabelText('Password');
    const passwordRepeat = screen.getByLabelText('Repeat Password');

    await userEvent.type(password, "P4ssword");
    await userEvent.type(passwordRepeat, "P4ssword");

    expect(button).toBeEnabled();
  })
});



