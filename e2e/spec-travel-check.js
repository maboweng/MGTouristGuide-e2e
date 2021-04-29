browser.ignoreSynchronization = true; //不知為啥，反正解決了超時問題

// spec.js
describe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get('https://mabowgo-tourguide-staging.web.app/main');
  });

  it('e2e test start', function() {
    expect(browser.getTitle()).toEqual('MabowGoTouristGuide');
  });


  //登入窗口
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

    //檢測網路
    browser.sleep(30000)
    console.log('網路檢測')
    var Internet = element(by.xpath('/html/body/app-root/app-index/div/div/app-live-stream/div/div[3]/div/div/div[1]/div[2]/div/p')).getText().then(function (value)
    {
      console.log('網路狀況 :', value)

      if (value === '良好')
    {
      console.log('不需重新檢測')
      browser.sleep(3000)
    }
    else if(value === '尚可')
    {
      console.log('不需重新檢測')
      browser.sleep(3000)
    }
    else if(value === '勉強')
    {
      console.log('不需重新檢測')
      browser.sleep(3000)
    }
    else if(value === '一般')
    {
      console.log('不需重新檢測')
      browser.sleep(3000)
    }
    else if(value === '不良')
    {
      console.log('請確認網路狀況')
      browser.close()
    }
    else if(value === '極差')
    {
      console.log('請確認網路狀況')
      browser.close()
    }
    else if(value === '無網路')
    {
      console.log('請確認網路狀況')
      browser.close()
    }
});

    //檢測鏡頭
    console.log('鏡頭檢測')
    var camera = element(by.xpath('/html/body/app-root/app-index/div/div/app-live-stream/div/div[3]/div/div/div[2]/div[2]/div/p')).getText().then(function (value){
    console.log('鏡頭狀況:',value)

if(value === '鏡頭正常')
{
  console.log('不需重新檢測')
  browser.sleep(3000)
}
else
{
  console.log('鏡頭異常需重新檢測')
  browser.close()
}


});
    //麥克風檢測
    console.log('麥克風檢測')
    var mic = element(by.xpath('/html/body/app-root/app-index/div/div/app-live-stream/div/div[3]/div/div/div[3]/div[2]/div/p')).getText().then(function (value){
    console.log('麥克風狀況:',value)

    if(value === '麥克風正常')
      {
        console.log('不需重新檢測')
        browser.sleep(3000)
      }
    else
      {
        console.log('麥克風異常需重新檢測')
        browser.close()
      }
    });

   //送出檢測結果
    var EC = browser.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.className('close-detect-btn ng-tns-c33-0'))),20000);
    element(by.className('close-detect-btn ng-tns-c33-0')).click();
    browser.sleep(3000)
    console.log('檢測以結束')
  });

});
