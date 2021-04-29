browser.ignoreSynchronization = true; //不知為啥，反正解決了超時問題

// spec.js
describe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get('https://mabowgo-tourguide-staging.web.app/main');
  });

  it('e2e test start', function() {
    expect(browser.getTitle()).toEqual('MabowGoTouristGuide');
  });

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

    browser.wait(function(){
      return browser.element(by.className("mat-ripple logout")); //確認網頁有跳轉，抓取登出鈕元件來判斷是否有登入系統
      },10000);

      console.log('成功跳轉至導遊系統主頁');
      browser.sleep(3000);
  });

  it('check username ', function() {
    if(expect(by.className('employee-id') == '11154668424001')) //判斷帳號是否正確
    {
    console.log('帳號登入正確');
    browser.sleep(3000);
    }
  else
    {
    console.log('帳號登入錯誤');
    browser.close;
    }
  });

  it('should show test component', async () => {
    console.log('點選出團任務')
    await browser.get('https://mabowgo-tourguide-staging.web.app/main');
    var EC = browser.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.tagName('app-travel-task-card'))),10000);
    element.all(by.tagName('app-travel-task-card')).count();

    console.log('選擇第一團')
    element(by.xpath('/html/body/app-root/app-index/div/div/app-main/div/div[2]/div[2]/app-travel-task-card')).click(); //用xpath尋找元素位置來進行點擊
    browser.sleep(3000)

    /*console.log('偵測到沒有鏡頭需點擊跳過')
    element(by.className('swal2-confirm swal2-styled')).click();
    browser.sleep(3000)*/

    if(element(by.className('guide-canvas'))) //判斷是否正常進入(抓取直播畫面為元素以此判斷成功進入)
    {
    console.log('進入成功');
    browser.sleep(3000);
    }
  else
    {
    console.log('進入失敗');
    browser.close;
    }

    console.log('導遊打招呼')
    element(by.className('greet-btn ng-star-inserted')).click();
    browser.sleep(3000)

    await browser.wait(EC.visibilityOf(element(by.className('greet'))),10000);
    element.all(by.className('greet')).count();

    console.log('選擇招呼內容')
    element(by.xpath('//*[@id="mat-dialog-0"]/app-greet-popover/div/div[1]/div/div[1]')).click()
    browser.sleep(3000)

    if(expect(by.className('message-comment') == '大家吃飽飯了嗎')) //判斷是否招呼成功(抓取聊天室導遊留言是否一致
    {
    console.log('招呼成功');
    browser.sleep(3000);
    }
  else
    {
    console.log('招呼失敗');
    browser.close;
    }

    var elm = element(by.className('greet-btn ng-star-inserted')); // 點擊空白處已取消導遊公告
    browser.actions()
    .mouseMove(elm, -100, -20)        // >>抓取打招呼元件，來判斷將鼠標移至對應座標並點擊
    .click()
    .perform();
    browser.sleep(3000);

    console.log('開始出團')
    browser.sleep(300000);
    element(by.className('video-play-btn ng-star-inserted')).click();

    /*console.log('暫停功能')
    var EC = browser.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.className('video-play-btn ng-tns-c33-735 ng-star-inserted'))),10000);
    element(by.className('video-play-btn ng-tns-c33-735 ng-star-inserted')).click();
    browser.sleep(10000)

    console.log('暫停恢復')
    element(by.className('video-play-btn ng-tns-c33-735 ng-star-inserted')).click();
    browser.sleep(10000)*/

    console.log('等待影片結束')
    browser.sleep(300000);

    console.log('撥放結束')
    element(by.className('video-play-btn ng-star-inserted')).click();
    browser.sleep(10000);
   });
})
