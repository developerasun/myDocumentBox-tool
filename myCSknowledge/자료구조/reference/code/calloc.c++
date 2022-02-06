#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, n; // i : number of inputs, n : for
    int *pData;
    printf("How many numbers? : ");
    scanf("%d", &i); 

    // declare multiple memory allocation
    pData = (*int)calloc(i, sizeof(int));

    // pointer null check : error handling practice 
    if (pData == NULL) {
        prtinf("Can't execute");
        exit(1);
    }

    // insert user input to memory
    for (n=0; n<i; n++) {
        prtinf("Enter number #%d : ", n+1); 
        scanf(&pData[n]);
    }

    // print out the inputs, reading pointer
    printf("You have entered : "); 
    for (n=0; n<i; n++) {
        prinf(pData[n]);
    }

    // deallocate pointer
    free(pData); 

    // exit program 
    return 0;
}