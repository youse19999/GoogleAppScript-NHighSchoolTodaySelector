//This script made by 2022/10/07
function jumptoday() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const needsearch = ["A","B","C","D","E","F","G"]
  var ss = SpreadsheetApp.getActive();
  var allsheets = ss.getSheets();
  var date = new Date()
  for(var s in allsheets){
    var sheet = allsheets[s];
    if(sheet.getName() == "日誌"){
      height = 11
      var data = sheet.getDataRange().getValues();
      //Logger.log(sheet.getDataRange().getValues().length);
      for(var i = 0; i<100;i++){
        for(var ii = 0;ii<needsearch.length;ii++){
          //Logger.log("select|" + needsearch[ii] + height.toString())
          //Logger.log(sheet.getRange(needsearch[ii] + height.toString()).getValue().toString());
          var nowdate = new Date(sheet.getRange(needsearch[ii] + height.toString()).getValue().toString());
          //Logger.log(nowdate.getUTCDate());
          if(nowdate.getMonth() + 1 == date.getMonth() + 1){
            if(nowdate.getDate() + 1 == date.getDate() + 1){
              sheet.setActiveRange(sheet.getRange(needsearch[ii] + height.toString()));
            }
          }
        }
        height += 12;
      }
    }
  }
}
