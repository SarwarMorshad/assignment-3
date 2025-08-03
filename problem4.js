/** Problem 04 - (Delete / Store) */
var fileName = "docx.txt";
//write your code here
if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}
