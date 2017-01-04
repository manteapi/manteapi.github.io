#!/usr/bin/python

import sys

def levenshtein_recursive(s,t) :
    if len(s) == 0 :
        return len(t)
    elif len(t) == 0 :
        return len(s)
    else :
        cost = 1 if s[len(s)-1] != t[len(t)-1] else 0
        #Delete a letter from s
        c1 = 1 + levenshtein_recursive( s[0:len(s)-1], t) 
        #Delete a letter from t
        c2 = 1 + levenshtein_recursive( s, t[0:len(t)-1]) 
        #Substitute 
        c3 = cost  + levenshtein_recursive( s[0:len(s)-1], t[0:len(t)-1]) 
        return min(c1, c2, c3)

def levenshtein_iterative(s,t) :
    #Build a matrix m such that m(i,j) is the edit distance between
    #the i first letters of s and the j first letters of t
    #Initial conditions are taken into account by considering the empty string
    #Thus the size of the matrix is len(s)+1 x len(t)+1
    m = [ [0 for i in range(len(s)+1) ] for j in range(len(t)+1) ]
    for i in range(len(s)+1) :
        m[0][i] = i
    for j in range(len(t)+1) :
        m[j][0] = j

    #Iteratively compute the edit distance
    for i in range(1,len(s)+1) :
        for j in range(1,len(t)+1) :
            cost = 1 if s[i-1] !=  t[j-1] else 0
            #Delete from s
            c1 = 1 + m[j][i-1]
            #Delete from t
            c2 = 1 + m[j-1][i]
            #Substitution
            c3 = cost + m[j-1][i-1]
            m[j][i] = min(c1,c2,c3)
    return m[len(t)][len(s)]


#Point set data
xCoord = [0, 2, 4, 6, 8]
yCoord = [0, 2, 4, 1, 4]

#Cost function 
#It measure the distance between a line of slope w
#and a (x,y) point set
def costFunction(x, y, w) :
    d = 0
    for i in range( len(x) ) : 
        d = d + pow(w*x[i]-y[i],2)
    return d

#Derivative of the above cost function
def deriv_costFunction(x, y, w) :
    d = 0
    for i in range( len(x) ) : 
        d = d + (w*x[i]-y[i])*x[i]
    return 2.0*d

#Optimization routine to find the best w that minimizes the cost function
def gradientDescent() :
    maxIterNb = 1e6
    iterNb = 0
    epsilon = 1e-3
    stepSize = 1e-5
    optimalSlope = 0
    evaldF_next = deriv_costFunction(xCoord, yCoord, optimalSlope)
    evaldF_curr = evaldF_next
    while abs(evaldF_next)>epsilon and iterNb<maxIterNb :
        evaldF_curr = evaldF_next
        evaldF_next = deriv_costFunction(xCoord, yCoord, optimalSlope)
        optimalSlope = optimalSlope - stepSize * evaldF_curr
        iterNb = iterNb + 1
    return optimalSlope

argc = len(sys.argv)
argl = sys.argv

errorArgMsg = "Wrong number of expected arguments " + str(argc) + " should be 3"

if argc!=3:
    print errorArgMsg
else:
    distance = levenshtein_recursive(argl[1], argl[2])
    print "Distance between " + argl[1] + " and " + argl[2] + " : " + str(distance)

    distance = levenshtein_iterative(argl[1], argl[2])
    print "Distance between " + argl[1] + " and " + argl[2] + " : " + str(distance)

    w = gradientDescent()
    print "Optimal slope : " + str(w)
    print "Cost function value : " + str(costFunction(xCoord, yCoord, w))
    print "Cost function derivative : " + str(deriv_costFunction(xCoord, yCoord, w))
