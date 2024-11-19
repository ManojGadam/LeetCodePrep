class Solution(object):
    def multiply(self, num1, num2):
        \\\
        :type num1: str
        :type num2: str
        :rtype: str
        \\\
        lookup = {}
        for i in range(10):
            lookup[48+i] = i
        
        ret = 0
        for i in range(len(num2)-1,-1,-1):
            pro = 0
            carry = 0
            for j in range(len(num1)-1,-1,-1):
                currPro =  lookup[ord(num2[i])] * lookup[ord(num1[j])] + carry
                num = currPro%10
                carry = currPro//10
                pro += num*(10**(len(num1)-1-j)) 
            if carry > 0:
                pro += carry * (10 ** len(num1))    
            ret += pro*(10**(len(num2)-1-i))
    
        return str(ret)    
        