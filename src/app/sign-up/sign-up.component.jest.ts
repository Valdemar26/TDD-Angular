import { render, screen} from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';
import { userEvent } from '@testing-library/user-event/setup/index';
import 'whatwg-fetch';

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
  it('sends username, email and password to backend after clicked button', async() => {
    const button = screen.getByRole('button', { name: 'Sign Up' });

    const spy = jest.spyOn(window, 'fetch');


    await render(SignUpComponent);
    const username = screen.getByLabelText('Username');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    await userEvent.type(username, "user name");
    await userEvent.type(email, "username@gmail.com");
    await userEvent.type(password, "P4ssword");
    await userEvent.click(button);

    const args = spy.mock.calls[0];
    const secondParam = args[1] as RequestInit;

    expect(secondParam.body).toEqual(JSON.stringify({
      username: "user name",
      email: "username@gmail.com",
      password: "P4ssword"
    }));
  })
});



