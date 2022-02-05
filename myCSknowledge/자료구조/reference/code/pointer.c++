#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, n;
    printf("Enter the number of integers");
    scanf("%d", &n);

    int *ptr = (int*)malloc(n*sizeof(int));

    if (ptr == NULL) { 
        printf("Meom")
    }
}