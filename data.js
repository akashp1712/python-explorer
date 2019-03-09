var explorerDataEn = {
  'add': {
    'end': {
      'name': 'append',
      'link_name': 'append',
      'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
      'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.append(8) # [2, 3, 4, 5, 8]"
    },
    'insert': {
      'name': 'insert',
      'link_name': 'insert',
      'desc': 'Inserts the given element before the element with the given index. Does not return the new list, just modifies the original.',
      'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.insert(2, 9)  # [2, 3, 9, 4, 5]<br>nums.insert(3, 'one') # [2, 3, 9, \"one\", 4, 5]"
    },
    'extend': {
      'name': 'extend',
      'link_name': 'extend',
      'desc': 'Adds the elements in list2 to the end of the list. Using + or += on a list is similar to using extend().',
      'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums.extend([7, 8]) # [4, 5, 6, 7, 8]<br>"
    },
    'concat': {
      'name': '+',
      'link_name': 'concat',
      'desc': 'Returns a new list built by adding (concatenating) two list together',
      'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums + [1, 2] # [2, 3, 4, 5, 1, 2]<br>nums # [2, 3, 4, 5]<br><br>[7, 8, 9] + [2, 3, 4, 5] + [1, 2] # [7, 8, 9, 2, 3, 4, 5, 1, 2]"
    }
  },
  'rm': {
    'pop': {
      'name': 'pop',
      'link_name': 'pop',
      'desc': 'Removes and returns the element at the given index.',
      'text': 'nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.pop(0) # 2<br>nums # [3, 4, 5]<br><br>nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.pop(2) # 4<br>nums # [2, 3, 5]'
    },
    'remove': {
      'name': 'remove',
      'link_name': 'remove',
      'desc': 'Searches for the first instance of the given element and removes it (throws ValueError if not present)',
      'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br>nums.remove(2) <br>nums # [2, 3, 4, 5, 5]<br><br>nums.remove(4) <br>nums # [2, 3, 5, 5]'
    },
    'delete': {
      'name': 'delete',
      'link_name': 'delete',
      'desc': 'Delete all items from the list that are equal to the given element.',
      'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br> # Using list comprehension <br>nums = [val for val in nums if val != 2]<br>nums # [3, 4, 5, 5]<br>'
    },
    'uniq': {
      'name': 'uniq',
      'link_name': 'uniq',
      'desc': 'Returns a copy of the original list with all duplicate elements removed.',
      'text': "nums = [5, 4, 5, 1, 7, 5, 1] # [5, 4, 5, 1, 7, 5, 1]<br> # convert the list to set<br>nums = set(num) # (1, 4, 5, 7)<br> # convert it back to list<br>nums = list(nums) # [1, 4, 5, 7]"
    }
  },
  'find': {
    'specific': {
      'name': 'specific',
      'link_name': 'specific',
      'desc': 'Returns the element at the specified index(es)',
      'text': "nums = [12, 13, [14, 15]] # [12, 13, [14, 15]]<br>nums[0] # 12<br>nums[2][1] # 15"
    },
    'match': {
      'name': 'select',
      'link_name': 'select',
      'desc': 'Returns a new array containing all elements of the original array for which the given block returns a true value',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.select { |num| num.even? } #=> [4, 6]'
    },
    'include': {
      'name': 'include',
      'link_name': 'include-3F',
      'desc': 'Returns true if the given object is in the List. otherwise, returns false',
      'text': 'nums = [1, 4, 5, 7, [3, 8]] # [1, 4, 5, 7, [3, 8]]<br>4 in nums # True<br>3 in nums # False'
    }
  },
  'iter': {
    'each': {
      'name': 'each',
      'link_name': 'each',
      'desc': 'calls the given block once for each element in the array. Returns the original array',
      'text': "nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.each{|x| print x+1} #=> [4, 5, 6]<br>#the command above prints '567' and returns [4, 5, 6]"
    },
    'map': {
      'name': 'map',
      'link_name': 'map',
      'desc': 'calls the given block once for each element in the array. Returns the original array, whose values have been replaced by the values returned by the block',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.each{|x| x+10} #=> [14, 15, 16]'
    }
  },
  'sort': {
    'reverse': {
      'name': 'reverse',
      'link_name': 'reverse',
      'desc': "The reverse() function doesn't take any argument. The reverse() function doesn't return any value. It only reverses the elements and updates the list.",
      'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.reverse()<br>nums # [6, 4, 5]"
    },
    'sort': {
      'name': 'sort',
      'link_name': 'sort',
      'desc': "sort() method doesn't return any value. Rather, it changes the original list.",
      'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.sort()<br>nums # [4, 5, 6]<br>"
    }
  },
  'other': {
    'length': {
      'name': 'length',
      'link_name': 'length',
      'desc': 'Returns the length of an array. Length may be 0.',
      'text': "nums = [4, 5, 6] # [4, 5, 6]<br>len(nums) # 3"
    },
    'clear': {
      'name': 'clear',
      'link_name': 'clear',
      'desc': 'clear the give list',
      'text': 'nums = [4, 5, 6] # [4, 5, 6]<br>nums.clear()<br>nums # []<br>'
    },
    'count': {
      'name': 'count',
      'link_name': 'count',
      'desc': 'The count() method returns the number of occurrences of an element in a list.',
      'text': 'nums = [2, 2, 5, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br>nums.count(2) # 2<br>nums.count(5) # 3'
    }
  }
};

var explorerData = {
  'en': explorerDataEn
}
