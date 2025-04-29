def twoSum(nums:list[int],target:int)->list[int]:
    num_dict={}
    for i,num in enumerate(nums): 
        com=target-num
        if com in num_dict:
            return [num_dict[com],i]
        num_dict[num]=i

    return []

nums=[2,7,11,15]
target=9
result=twoSum(nums,target)
print(result)
