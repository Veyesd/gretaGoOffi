import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateMessagePage } from './validate-message.page';

describe('ValidateMessagePage', () => {
  let component: ValidateMessagePage;
  let fixture: ComponentFixture<ValidateMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
