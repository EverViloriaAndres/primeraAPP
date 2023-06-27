import { TestBed } from '@angular/core/testing';
import { componentePrincipal } from './componentePrincipal.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [componentePrincipal],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(componentePrincipal);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'primeraAPP'`, () => {
    const fixture = TestBed.createComponent(componentePrincipal);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('primeraAPP');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(componentePrincipal);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'primeraAPP app is running!'
    );
  });
});
