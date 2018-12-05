import { PortfolioRoutingModule } from './portfolio-routing.module';

describe('PortfolioRoutingModule', () => {
  let portfolioRoutingModule: PortfolioRoutingModule;

  beforeEach(() => {
    portfolioRoutingModule = new PortfolioRoutingModule();
  });

  it('should create an instance', () => {
    expect(portfolioRoutingModule).toBeTruthy();
  });
});
