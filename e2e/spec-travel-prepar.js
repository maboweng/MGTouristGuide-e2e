browser.ignoreSynchronization = true; //不知為啥，反正解決了超時問提
// spec.js
describe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get('https://mabowgo-tourguide-staging.web.app/main');
  });

  it('e2e test start', function() {
    expect(browser.getTitle()).toEqual('MabowGoTouristGuide');
  });

 // 登入窗口
 it('login MabowGoTouristGuide', function() {
  console.log('輸入帳號');
  element(by.className('account-input')).sendKeys(11154668424001); //輸入帳號
  browser.sleep(3000);

  console.log('輸入密碼');
  element(by.className('pwd-input')).sendKeys(11154668424001);  //輸入密碼
  browser.sleep(3000);

  console.log('登入');
  element(by.className('mat-focus-indicator login-btn mat-button mat-button-base')).click(); //登入
  browser.sleep(3000);
});

 //進入導遊主頁面
 it('into MABOWGOTouristGuide homepage', async () => {
  var EC = browser.ExpectedConditions;
  await browser.wait(EC.visibilityOf(element(by.className('mat-ripple logout'))),10000);
  console.log('成功跳轉至導遊系統主頁');

  var account = element(by.className('employee-id')).getText().then(function (value)
  {
    console.log('帳號 :', value)


    if (value === '11154668424001')
  {
    console.log('帳號登入成功')
  }
  else
  {
    console.log('帳號登入失敗')
    browser.close()

  }
  });
});


 //選取出團
 it('should show test component', async () => {
  console.log('點選出團任務')
  var EC = browser.ExpectedConditions;
  await browser.wait(EC.visibilityOf(element(by.tagName('app-travel-task-card'))),10000);
  element.all(by.tagName('app-travel-task-card')).count();

  console.log('選擇第一團')
  element(by.xpath('/html/body/app-root/app-index/div/div/app-main/div/div[2]/div[2]/app-travel-task-card')).click(); //用xpath尋找元素位置來進行點擊
  browser.sleep(3000)

    if(element(by.className('play-btn ng-star-inserted'))) //判斷是否有正常進入出團準備頁面(抓取影片播放扭來確認)
    {
    console.log('進入正常');
    browser.sleep(3000);
    }
  else
    {
    console.log('進入失敗');
    browser.close;
    }

    console.log('點擊記事本')
    element(by.className('note-btn')).click();
    browser.sleep(3000)

    console.log('記事本輸入文字')
    element(by.tagName('textarea')).sendKeys('MABOW GO! E2E TEST!')
    browser.sleep(3000)

    console.log('儲存')
    element(by.className('save-btn ng-star-inserted')).click()
    browser.sleep(3000)

    console.log('關閉記事本')
    element(by.className('note-btn')).click();
    browser.sleep(3000)

    console.log('設定實境導遊招呼')
    await browser.wait(EC.visibilityOf(element(by.className('input-section'))),10000);
    element.all(by.className('input-section')).count();

    console.log('輸入招呼')
    element(by.xpath('//*[@id="cdk-accordion-child-0"]/div/div/div[1]/input[6]')).sendKeys('E2E TEST!')
    browser.sleep(3000)

    console.log('儲存')
    element(by.className('save-btn ng-star-inserted')).click()
    browser.sleep(3000)

    console.log('播放影片')
    element(by.className('play-btn ng-star-inserted')).click();


    if(element(by.className('vjs-control-bar'))) //抓取影片進度條判斷是否正常撥放影片
    {
    console.log('正常撥放');
    browser.sleep(3000);
    }
  else
    {
    console.log('播放失敗');
    browser.close;
    }

    console.log('點擊返回主畫面')
    element(by.className('back-btn')).click();
    browser.sleep(10000);
  });


});

