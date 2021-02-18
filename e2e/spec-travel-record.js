browser.ignoreSynchronization = true; //不知為啥，反正解決了超時問題
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



  //點擊查看全部
  it('check all record', async () => {
    console.log('點擊查看全部')
    element(by.className('mat-ripple record-detail-btn')).click();

    var EC = browser.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.tagName('mat-panel-title'))),10000); //確認有跳轉至全部出團紀錄頁面，抓取開合鈕元件來判斷是否有登入系統
    console.log('成功進入查看全部出團紀錄');
    browser.sleep(3000);

    console.log('點擊返回主頁');
    element(by.className('mat-ripple record-detail-btn')).click(); //回到主頁
    browser.sleep(3000);

  });



//點選單一出團紀錄
   it('check single record', async () => {
     console.log('點選單一出團紀錄')
     var EC = browser.ExpectedConditions;
     await browser.wait(EC.visibilityOf(element(by.tagName('app-travel-record-card'))),10000);
     element.all(by.tagName('app-travel-record-card')).count();

     console.log('選擇第一團')
     element(by.xpath('/html/body/app-root/app-index/div/div/app-main/div/div[1]/div[2]/div[2]/app-travel-record-card[1]')).click(); //用xpath尋找元素位置來進行點擊
     browser.sleep(3000)

     await browser.wait(EC.visibilityOf(element(by.tagName('app-travel-record-detail-card'))),10000);
     console.log('選擇成功')

     console.log('點擊返回主頁');
     element(by.className('mat-ripple record-detail-btn')).click(); //回到主頁
   });

});
