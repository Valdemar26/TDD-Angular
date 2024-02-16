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





