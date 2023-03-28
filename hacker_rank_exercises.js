// Esercizio 1 
// sicuramente ci sarà un algoritmo più efficiente, ma mi chiedevo se fosse
//possibile efficientarlo ulteriormente con ciò che abbiamo già visto

function reverseArray(a) {
    let n=0;   
       for (const element of a){
           n++
    }
       for (let i=0; i<n-1; i++){
           a.unshift(a[(2*i)+1
        ]);
    }
       for(let i=0; i<n-1; i++)
       {
           a.pop()
    }
       return a;
}


// Esercizio 2
function simpleArraySum(ar) {
    let sum = 0;
    for (const element of ar){
        sum += element;
    }
    return sum;
}


// Esercizio 3
function staircase(n) {
    for (let i=1; i<=n; i++)
    {
        let string = "";
        for(let spaces=1; spaces<=n-i; spaces++) //spaces rappresenta il n di hashtag da stampare
        {
            string += " "
        }
        for(let hashtags=1; hashtags<=i; hashtags++) //hashtags rappresenta il n di hashtag da stampare
        {
            string += "#";
        }
        
        console.log(string);
    }
}

// Esercizio 4 (giusto al primo tentativo, ci sto prendendo gusto ;))
function divisibleSumPairs(n, k, ar) {
    let counter_of_magic_number = 0;
    for(let i=0; i<n; i++)
    {
        for(let j=i+1; j<n; j++)
        {
            if( (ar[i]+ar[j])%k == 0)
            {
                counter_of_magic_number++;
            }
        }
    }
    return counter_of_magic_number;
}

// Esercizio 5
function compareTriplets(a, b) {
    let scoreboard = [0, 0];
    for(let i=0; i<3; i++)
    {
        if(a[i] > b[i])
        {
            scoreboard[0]++;
        }
        else if(a[i] < b[i])
        {
            scoreboard[1]++;
        }
    }
    return scoreboard;
    }

// Esercizio 6
function hourglassSum(arr) {
    let hourglass_max_sum=-Infinity;
    let hg_t_sum=0;
    
    for(let i=1; i<=4; i++)
    {
        for(let j=1; j<=4; j++)
        {
            {
                hg_t_sum = 0;                                        // l'ho scritto così anzichè mettere altri cicli "for" perchè mi sembrava
                hg_t_sum += arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]; // più leggibile e carino (in teoria non ha nemmeno perso efficienza, giusto?)
                hg_t_sum += arr[i][j];                               // se avessi scritto la somma con tutti gli addendi in una botta
                hg_t_sum += arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]; // sola sarebbe stato più efficiente?
                if(hg_t_sum > hourglass_max_sum)                      
                {
                hourglass_max_sum = hg_t_sum;
                }
            }
        }
    }
    return hourglass_max_sum;
}