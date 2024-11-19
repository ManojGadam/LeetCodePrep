class Solution(object):
    def multiply(self, num1, num2):
        \\\
        :type num1: str
        :type num2: str
        :rtype: str
        \\\
        lookup = {}
        def convertToNum(num):
            ret = 0
            for i in range(0,len(num)):
                ret = ret*10 + lookup[ord(num[i])]
            return ret
        
        for i in range(10):
            lookup[48+i] = i
        
        n1 = convertToNum(num1)
        n2 = convertToNum(num2)
        ret = n1*n2
        return str(ret)    
        