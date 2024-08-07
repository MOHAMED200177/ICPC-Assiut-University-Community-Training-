#include <stdio.h>

int main()
{
    int i;
    long long ll;
    char c;
    float f;
    double d;

    // Reading the values
    scanf("%d %lld %c %f %lf", &i, &ll, &c, &f, &d);

    // Printing the values
    printf("%d\n", i);
    printf("%lld\n", ll);
    printf("%c\n", c);
    printf("%.2f\n", f);
    printf("%.5lf\n", d);

    return 0;
}
