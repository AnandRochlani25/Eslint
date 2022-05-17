import subprocess
# Reading the output and storing it in the p1

p1=subprocess.run('eslint --rulesdir javascript/rules javascript/variable.js ',shell=True,capture_output=True,text=True)
# Extracting the output txt 
s=p1.stdout
#Reading the file To get no of lines in the file.
file=open('javascript/variable.js','r')
noOfLines=len(file.readlines());
errorCount=0
warningCount=0
#Same line can have multiple issue, to filter the unique lines which have error
set=set()
#Storing the result
list=s.split("\n")

print(type(list))
for x in list:
    t=x.find(':')
    print(t,x)
   
    
       
    if t!=-1:
        set.add(x[0:t])
        l=x.find('error ')
        if l!=-1:
            errorCount+=1
        else:
            warningCount+=1


print(errorCount,warningCount,len(set),noOfLines)
#print(s)
percentage = ((noOfLines-(errorCount*1+warningCount*0.5))*100)/noOfLines;
print(percentage)
file.close();