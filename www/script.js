////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main(){
  var tmp = { 
    raw : { 
      file1 : document.getElementById('file1').value,
      file2 : document.getElementById('file2').value
    },  
    cookienames : [], 
    cookies  : { 
      file1 : {}, 
      file2 : {}
    }   
  }


  raw = tmp.raw.file1.split(";");
  for(var i=0; i<raw.length; i++){
    cookie = raw[i].split("=");
    cookiename = cookie[0];
    cookieval  = cookie[1];
    tmp.cookies.file1[cookiename] = cookieval;
    // add this cookiename if has not be seen before
    if(tmp.cookienames.indexOf(cookiename) == -1){
      tmp.cookienames.push(cookiename);
    }
  }

  raw = tmp.raw.file2.split(";");
  for(var i=0; i<raw.length; i++){
    cookie = raw[i].split("=");
    cookiename = cookie[0];
    cookieval  = cookie[1];
    tmp.cookies.file2[cookiename] = cookieval;
    if(tmp.cookienames.indexOf(cookiename) == -1){
      tmp.cookienames.push(cookiename);
    }
  }

// output to the page

  var table = document.getElementById('resultsTable');
  // remove the last row in the table as this is the one suggesting the process is still checking 
//  table.deleteRow(table.rows.length -1);

  for(i=0; i<tmp.cookienames.length; i++){
    // add output to the table
    var row  = table.insertRow(-1); // -1 appends to the end of the table

    // add cells
    cell = row.insertCell(-1);
    cell.classList.add("perfGrey");
    cell.innerHTML = tmp.cookienames[i];

    // add cells
    cell = row.insertCell(-1);
    cell.style.textAlign = "center"
    if(tmp.cookies.file1[tmp.cookienames[i]]){
      cell.classList.add("perfGreen");
      cell.innerHTML = tmp.cookies.file1[tmp.cookienames[i]];
    } else {
      cell.classList.add("perfRed");
      cell.innerHTML = "Missing";
    }

    // add cells
    cell = row.insertCell(-1);
    cell.style.textAlign = "center"
    if(tmp.cookies.file2[tmp.cookienames[i]]){
      cell.classList.add("perfGreen");
      cell.innerHTML = tmp.cookies.file2[tmp.cookienames[i]];
    } else {
      cell.classList.add("perfRed");
      cell.innerHTML = "Missing";
    }

    // add cells
    cell = row.insertCell(-1);
    cell.style.textAlign = "center"
    if(tmp.cookies.file1[tmp.cookienames[i]] && tmp.cookies.file2[tmp.cookienames[i]]){
      cell.classList.add("perfGreen");
      cell.innerHTML = "True";
    } else {
      cell.classList.add("perfRed");
      cell.innerHTML = "False";
    }

    // add cells
    cell = row.insertCell(-1);
    cell.style.textAlign = "center"
    if(tmp.cookies.file1[tmp.cookienames[i]] == tmp.cookies.file2[tmp.cookienames[i]]){
      cell.classList.add("perfGreen");
      cell.innerHTML = "True";
    } else {
      cell.classList.add("perfRed");
      cell.innerHTML = "False";
    }

    // add cells
    cell = row.insertCell(-1);
    cell.style.textAlign = "center"
    cell.innerHTML = "<a href='https://cookiepedia.co.uk/cookies/"+tmp.cookienames[i]+"' target='_blank'>Link</a>";
  }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
