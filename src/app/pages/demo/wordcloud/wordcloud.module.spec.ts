import { WordcloudModule } from './wordcloud.module';

describe('WordcloudModule', () => {
  let wordcloudModule: WordcloudModule;

  beforeEach(() => {
    wordcloudModule = new WordcloudModule();
  });

  it('should create an instance', () => {
    expect(wordcloudModule).toBeTruthy();
  });
});
