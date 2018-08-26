import { WixModule } from './wix.module';

describe('WixModule', () => {
  let wixModule: WixModule;

  beforeEach(() => {
    wixModule = new WixModule();
  });

  it('should create an instance', () => {
    expect(wixModule).toBeTruthy();
  });
});
