import { render, screen} from '@testing-library/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Layout', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has Sign Up header', async () => {
    await render(SignUpComponent);
    const header = screen.getByRole('heading', { name: 'Sign Up' });
    expect(header).toBeTruthy();
  })

  it('has username input', () => {
    const signUp = fixture?.nativeElement as HTMLElement;
    const label = signUp?.querySelector('label[for="username"]');
    const input = signUp?.querySelector('input[id="username"]');
    expect(input).toBeTruthy();
    // expect(label).toBeTruthy();
    // expect(label?.textContent).toContain('Username');
  })
})

describe('Interactions', () => {
  let fixture: ComponentFixture<SignUpComponent>;
  it('enables the button when all the fields have valid input', async () => {
    let button : any;

    const signUp = fixture.nativeElement as HTMLElement;
    const passwordInput = signUp.querySelector('input[id="password"]') as HTMLInputElement;
    const passwordRepeatInput = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;

    passwordInput.value = "P4ssword";
    passwordInput.dispatchEvent(new Event('input'));
    passwordRepeatInput.value = "P4ssword";
    passwordRepeatInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    button = signUp.querySelector('button');
  })
})




