function runProgram(input){
    input=input.trim().split("\n")
    let testcase=+input[0]
    let line=1;
    for(let i=0;i<testcase;i++)
    {
        let n=+input[line++]
        let x=+input[line++]
        let y=+input[line++]
        brr=[]
        for(let i=0;i<n;i++)
        {
            brr.push(input[line++].split(" ").map(Number))
        }
         let brick1=[]
       let brick2=[]
      for(let i=0;i<2;i++)
     {
        for(let j=0;j<n;j++)
        {
            if(i==1)
            {
                brick2.push(brr[j][i])
            }
            else
            {
                brick1.push(brr[j][i])
            }
            
        }
         myval(brick1,brick2,x,y)
     }
     
     
    }
    
}

function myval(brick1,brick2,x,y)
{
    brick1.sort((a,b)=>b-a)
    brick2.sort((a,b)=>b-a)
    let n=brick1.length;
    let cost=0;
    let i=0;
    while(i<n)
    {
        let count=0;
        if(brick1[i]>brick2[i])
        {
            while(brick1[i]!=brick2[i] && brick1[i]>0)
            {
                brick1[i]=brick1[i]-1;
                count++;
            }
            
            cost=cost+(count*y);
        }
        else if(brick1[i]<brick2[i])
        {
            while(brick1[i]!=brick2[i] && brick1[i]<brick2[i])
            {
                brick1[i]=brick1[i]+1;
                count++;
            }
            cost=cost+(count*x)
        }
        i++
    }
    if(cost!=0)
    {
        console.log(cost)
    }
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

