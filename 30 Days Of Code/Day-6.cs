using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        int T;
        T = int.Parse(Console.ReadLine());

        for(int i = 0; i < T; i++)
        {
            string str;
            str = Console.ReadLine();

            string tmpStr1 = "", tmpStr2 = "";

            for(int j = 0; j < str.Length; j++)
            {
                if(j % 2 == 0)
                {
                    tmpStr1 += str[j];
                }
                else
                {
                    tmpStr2 += str[j];
                }
            }
            str = tmpStr1 + " " + tmpStr2;
            Console.Write(str + "\n");
        }
    }
}