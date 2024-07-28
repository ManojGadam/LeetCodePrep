import cv2;
import numpy as np;

#define the main method
def main() -> None:
    teethImage();

#import the image from a file and change to gray scale
def cv_imread():
    cimg = cv2.imread('teeth_sample.png');
    img = cv2.cvtColor(cimg, cv2.COLOR_RGB2GRAY);
    return img;

#act upon the image
def teethImage():
    bindImageWindow(cv_imread());
    
#bind the image to a window
def bindImageWindow(img):  
    cv2.namedWindow('teeth');
    
    #boolean to keep the program going
    keepGoing = True;

    while keepGoing:
        cv2.imshow('teeth', cv_imread());
        npData = np.array(img);
        print (npData.shape);
        keypressed = cv2.waitKey(0) & 0xFF;
    
        #if keypressed is esc end program, 
        #if m draw line between top and bottom teeth and compute second degree polynomial line
        #if t or b draw lines between teeth
        if(keypressed == 27):
            keepGoing = False
            cv2.destroyAllWindows();
        elif(keypressed == ord('m')):
            findMidLine(img, npData);
#            findTopLines(img, npData);
#            findBottomLines(img, npData);
            keepGoing = True;         
#            keepGoing = False;
        elif(keypressed == ord('t')):
            findTopLines(img, npData);
            keepGoing = True;
        elif(keypressed == ord('b')):
            findBottomLines(img, npData);
            keepGoing = True;

def findMidLine(img, npData):
    (row, col) = img.shape[0:2];
    print (row, ":", col);
#    np.set_printoptions(threshold=sys.maxsize);
    #print (npData);
    i = 0;
    j = 0;
    arr = [];
    #truncating the area that is used to find the gap 
    for i in range(175,250, 30):
        for j in range(0, 512, 50):
            if npData[i,j] <= 125:
                #print (npData[i,j]) used for checking that the value is coming out as a number that can be used
                # place dots onto image
                img = cv2.circle(img, (j,i) , 0, (255, 0, 0) , 2);
                arr.append (npData[i,j]);
                p = np.polyfit(npData[j],npData[i],2);
                cv2.imshow('new image', img);
                #take the dots and roughly connect using a second degree polynomial - this is not working properly
                newImg = np.polyfit(npData[j],npData[i],2)
#                cv2.imshow('additional', newImg);

            #print ("j: ", j, " i: ", i); used for testing of image size 
  
    
    #equation of second polynomial is used in findTopLines and findBottomLines 
    print ("Mid Line");
    cv2.waitKey(0);

#need to pass the image, npData array, and the polynomial line
def findTopLines(img, npData):
    (row, col) = img.shape[0:2];
    i = 0;
    j = 0
    for j in range(0,row, 50):
        #this lower boundary becomes the second degree polynomial
        for i in range(j, col, 25):
            #print ("j: ", j)
            pass;
        
        print ("j: ", j, " i: ", i);

        # this only print the same line and not the average of each line
        print("mean", np.mean(npData, axis = 0, dtype = int));
                     
    print (row, ":", col);
    cv2.waitKey(0);
    print ("Top Lines");

#need to pass the image, npData array, and the polynomial line
def findBottomLines (img, npData):
    (row, col) = img.shape[0:2];
    cv2.waitKey(0);
    i = 0;
    j = 0
    for j in range(0,row, 50):
        #this upper boundary becomes the second degree polynomial
        for i in range(j, col, 25):
            #print ("j: ", j)
            pass;
        
        print ("j: ", j, " i: ", i);

        # this only prints the same line and not the average of each line
        print("mean", np.mean(npData, axis = 0, dtype = int));
                     
    print (row, ":", col);
    print ("bottom Lines");
    
# runs the program
main();