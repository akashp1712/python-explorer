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
    'end': {
      'name': 'pop',
      'link_name': 'pop',
      'desc': 'Removes the last n elements from the array and returns it. Returns nil if the array is empty',
      'text': "nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.pop #=> 6<br>nums #=> [4, 5]<br><br>nums.pop(2) #=> [4, 5]<br>nums #=> []<br><br>nums.pop #=> nil<br>nums #=> []"
    },
    'start': {
      'name': 'shift',
      'link_name': 'shift',
      'desc': 'Adds the last n elements to the array and returns it. Returns nil if the array is empty',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.shift #=> 4<br>nums #=> [5, 6]<br><br>nums.shift(2) #=> [5, 6]<br>nums #=> []<br><br>nums.shift #=> nil<br>nums #=> []'
    },
    'delete_at': {
      'name': 'delete_at',
      'link_name': 'delete_at',
      'desc': 'Deletes the element at the given index and returns that element. Returns nil if the index is out of range',
      'text': "nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.delete_at(1) #=> 5<br>nums #=> [4, 6]<br><br>nums.delete_at(99) #=> nil"
    },
    'delete': {
      'name': 'delete',
      'link_name': 'delete',
      'desc': 'Delete all items from the array that are equal to the given element. Returns the last deleted item or nil if no matching item is found',
      'text': "nums = [4, 5, 5, 6] #=> [4, 5, 5, 6]<br>nums.delete(2) #=> nil<br>nums #=> [4, 5, 5, 6]<br><br>nums.delete(5) #=> 5<br>nums #=> [4, 6]"
    },
    'compact': {
      'name': 'compact',
      'link_name': 'compact',
      'desc': 'Returns a copy of the original array with all nil elements removed.',
      'text': "items = [nil, 4, nil, 6, nil, nil] #=> [nil, 4, nil, 6, nil, nil]<br>items.compact #=> [4, 6]<br>items #=> [nil, 4, nil, 6, nil, nil]"
    },
    'uniq': {
      'name': 'uniq',
      'link_name': 'uniq',
      'desc': 'Returns a copy of the original array with all duplicate elements removed.',
      'text': "nums = [5, 4, 5, 1, 7, 5, 1] #=> [5, 4, 5, 6, 7, 5, 1]<br>nums.uniq #=> [4, 7]<br>nums #=> [5, 4, 5, 6, 7, 5, 1]"
    }
  },
  'find': {
    'specific': {
      'name': '[]',
      'link_name': '5B-5D',
      'desc': 'Returns the element at the specified index(es)',
      'text': "nums = [1, 2, [3, 3.5]] #=> [1, 2, [3, 3.5]]<br>nums[0]#=> 1<br>nums[2, 1] #=> 3.5"
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
      'desc': 'Returns true if the given object is in the array. otherwise, returns false',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.include?(3) #=> false<br>nums.include?(4) #=> true'
    },
    'bsearch': {
      'name': 'bsearch',
      'link_name': 'bsearch',
      'desc': 'Uses binary search to find a value in a sorted array that meets a given condition. Returns nil if not found',
      'text': "nums = [0, 4, 7, 10, 12]<br>nums.bsearch {|x| x >= 4 } #=> 4<br>nums.bsearch {|x| x >= 6 } #=> 7<br>nums.bsearch {|x| x >= -1 } #=> 0<br>nums.bsearch {|x| x >= 100 } #=> nil<br>nums.bsearch{|x| x == 7 } => 7<br>nums.bsearch {|x| x == 6 } #=> nil"
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
      'desc': "Returns a new array containing the original array's elements in reverse order. <br><br><code>reverse</code> does not modify the original array. <code>reverse!</code> modifies the original array",
      'text': "nums = [5, 4, 6] #=> [5, 4, 6]<br>nums.reverse #=> [6, 4, 5]<br>nums #=> [5, 4, 6]<br><br>nums.reverse! #=> [6, 4, 5]<br>nums #=> [6, 4, 5]"
    },
    'sort': {
      'name': 'sort',
      'link_name': 'sort',
      'desc': 'Returns a new array created by sorting the original array.<br><code>sort</code> does not modify the original array. <code>sort!</code> modifies the original array',
      'text': "nums = [5, 4, 6] #=> [5, 4, 6]<br>nums.sort #=> [4, 5, 6]<br><br>nums #=> [5, 4, 6]<br>nums.sort! #=> [4, 5, 6]<br>nums #=> [4, 5, 6]<br>"
    }
  },
  'other': {
    'length': {
      'name': 'length',
      'link_name': 'length',
      'desc': 'Returns the length of an array. Length may be 0.',
      'text': "nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.length #=> 3"
    },
    'empty': {
      'name': 'empty',
      'link_name': 'empty-3F',
      'desc': 'Returns true if the array has no elements. otherwise, returns false',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.empty? #=> false<br><br>nums = [] #=> []<br>nums.empty? #=> true'
    }
  }
};

var explorerData = {
  'en': explorerDataEn
}
