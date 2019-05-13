# Document Censor Utility
<pre>
**Issue below commands**
C:\DocumentCensorUtility> cd front-end
C:\DocumentCensorUtility\front-end> npm install
C:\DocumentCensorUtility\front-end> cd ..
C:\DocumentCensorUtility> cd back-end
C:\DocumentCensorUtility\back-end> npm install
C:\DocumentCensorUtility\back-end> npm start

**Open another command window and issue below command**
C:\DocumentCensorUtility> cd front-end
C:\DocumentCensorUtility\front-end> npm start

Open browser and browse http://localhost:3000/

**Test Case 1:**
Use document testing.txt located in the assets folder for Document field.
Use below string for Keywords/Phrases field.

  euismod, Aliquam id diam "Aliquam ut", 'sit amet' "gravida rutrum" “Boston Red Sox”

Hit Upload and Mask button, masked output will be visible.

Test Case 2:
Use attached document testing2.txt located in the assets folder for Document field.
Use below string for Keywords/Phrases field.

  "document text" world, 'keywords and phrases' Pizza, Classified “The CIA”

Hit Upload and Mask button, masked output will be visible.
</pre>
