/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let s = 1, e = n,mid = -1
        while(s<=e){
            mid = Math.floor((s+e)/2)
            if(isBadVersion(mid) && !isBadVersion(mid-1))return mid
            else if(isBadVersion(mid))e = mid-1
            else s=mid+1
        }
        return n
    };
};