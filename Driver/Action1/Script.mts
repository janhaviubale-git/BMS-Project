Dim path
path="C:\Users\user249\Documents\UFT One\bookmyshow\Test Data\Test Data.xlsx"
DataTable.AddSheet "Test Data"
DataTable.ImportSheet path,"BMS","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Execution_Flag","Test Data")="Y" Then
executeTest (DataTable.Value("testCaseID","Test Data"))
DataTable.Value("Result","Test Data") = Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"Test Data","BMS"            
            
            
                    '--------------------------------Descriptive object------------------------------
            
'Filter_TC001()
'Filter_TC002()
'Filter_TC003()
'Filter_TC004() @@ script infofile_;_ZIP::ssf14.xml_;_
'Filter_TC005() @@ script infofile_;_ZIP::ssf250.xml_;_
'Filter_TC006() @@ script infofile_;_ZIP::ssf244.xml_;_
'Filter_TC007() @@ script infofile_;_ZIP::ssf247.xml_;_
'Filter_TC008()
'Filter_TC009() @@ script infofile_;_ZIP::ssf18.xml_;_
'Filter_TC0010()
 @@ script infofile_;_ZIP::ssf248.xml_;_
 @@ script infofile_;_ZIP::ssf249.xml_;_
 @@ script infofile_;_ZIP::ssf100.xml_;_
 @@ script infofile_;_ZIP::ssf235.xml_;_
                    '------------------------------Object Repository----------------------------------
 
'Filter_TC0011()
'Filter_TC0012() @@ script infofile_;_ZIP::ssf188.xml_;_
'Filter_TC0013()
'Filter_TC0014()
'Filter_TC0015()
'Filter_TC0016()
'Filter_TC0017()
'Filter_TC0018()
'Filter_TC0019()
'Filter_TC0020()
 @@ script infofile_;_ZIP::ssf223.xml_;_
 
  @@ script infofile_;_ZIP::ssf238.xml_;_

 @@ script infofile_;_ZIP::ssf218.xml_;_
 @@ script infofile_;_ZIP::ssf228.xml_;_
 @@ script infofile_;_ZIP::ssf229.xml_;_
 @@ script infofile_;_ZIP::ssf219.xml_;_
 @@ script infofile_;_ZIP::ssf208.xml_;_
 @@ script infofile_;_ZIP::ssf214.xml_;_
 @@ script infofile_;_ZIP::ssf211.xml_;_
 @@ script infofile_;_ZIP::ssf138.xml_;_
 @@ script infofile_;_ZIP::ssf203.xml_;_
 @@ script infofile_;_ZIP::ssf204.xml_;_
 @@ script infofile_;_ZIP::ssf197.xml_;_
 @@ script infofile_;_ZIP::ssf145.xml_;_
 @@ script infofile_;_ZIP::ssf175.xml_;_
 @@ script infofile_;_ZIP::ssf110.xml_;_
 @@ script infofile_;_ZIP::ssf115.xml_;_
 @@ script infofile_;_ZIP::ssf125.xml_;_
 @@ script infofile_;_ZIP::ssf182.xml_;_
 @@ script infofile_;_ZIP::ssf153.xml_;_
 @@ script infofile_;_ZIP::ssf13.xml_;_
 @@ script infofile_;_ZIP::ssf56.xml_;_
 @@ script infofile_;_ZIP::ssf159.xml_;_
 
 
 
 @@ script infofile_;_ZIP::ssf132.xml_;_
