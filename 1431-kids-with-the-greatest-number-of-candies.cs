public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
        var m=candies.Max();
        List<bool> res=new List<bool>();
        foreach(var i in candies)
        {
            if(i+extraCandies>=m)res.Add(true);
            else res.Add(false);
        }
        return res;
    }
}