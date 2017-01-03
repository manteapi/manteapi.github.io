#!/usr/bin/python

import sys

def levenshtein_recursive(s,t) :
    if len(s) == 0 :
        return len(t)
    elif len(t) == 0 :
        return len(s)
    else :
        cost = 1 if s[len(s)-1] != t[len(t)-1] else 0
        c1 = 1 + levenshtein_recursive( s[0:len(s)-1], t) #Delete a letter from s
        c2 = 1 + levenshtein_recursive( s, t[0:len(t)-1]) #Delete a letter from t
        c3 = cost  + levenshtein_recursive( s[0:len(s)-1], t[0:len(t)-1]) #Substitute 
        return min(c1, c2, c3)

argc = len(sys.argv)
argl = sys.argv

errorArgMsg = "Wrong number of expected arguments " + str(argc) + " should be 3"

if argc!=3:
    print errorArgMsg
else:
    distance = levenshtein_recursive(argl[1], argl[2])
    print "Distance between " + argl[1] + " and " + argl[2] + " : " + str(distance)
