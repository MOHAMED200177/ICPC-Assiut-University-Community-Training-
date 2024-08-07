#include <stdio.h>

int main()
{
    int X, Y;

    // Reading the values
    scanf("%d %d", &X, &Y);

    // Printing the results
    printf("%d + %d = %d\n", X, Y, X + Y);
    printf("%d * %d = %d\n", X, Y, X * Y);
    printf("%d - %d = %d\n", X, Y, X - Y);

    return 0;
}
