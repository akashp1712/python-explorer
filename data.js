var explorerDataEn = {
  'add': {
    'option_text': 'add element or other list',
    'action_text': 'I need to add: ',
    'selector_id': 'sel-add',
    'data': {
      'end': {
        'name': 'append',
        'link_name': 'append',
        'option_text': 'element to the end of a list',
        'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.append(8) # [2, 3, 4, 5, 8]"
      },
      'insert': {
        'name': 'insert',
        'link_name': 'insert',
        'option_text': 'element at a specific location',
        'desc': 'Inserts the given element before the element with the given index. Does not return the new list, just modifies the original.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.insert(2, 9)  # [2, 3, 9, 4, 5]<br>nums.insert(3, 'one') # [2, 3, 9, \"one\", 4, 5]"
      },
      'extend': {
        'name': 'extend',
        'link_name': 'extend',
        'option_text': 'other list to this list',
        'desc': 'Adds the elements in list2 to the end of the list. Using + or += on a list is similar to using extend(). Does not return anything.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums.extend([7, 8]) # [4, 5, 6, 7, 8]<br>"
      },
      'concat': {
        'name': '+',
        'link_name': 'concat',
        'option_text': 'this list to other list(s)',
        'desc': 'Returns a new list built by adding (concatenating) two list together',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums + [1, 2] # [2, 3, 4, 5, 1, 2]<br>nums # [2, 3, 4, 5]<br><br>[7, 8, 9] + [2, 3, 4, 5] + [1, 2] # [7, 8, 9, 2, 3, 4, 5, 1, 2]"
      }
    }
  },
  'rm': {
    'option_text': 'remove elements',
    'action_text': 'I need to remove: ',
    'selector_id': 'sel-rm',
    'data': {
      'pop': {
        'name': 'pop',
        'link_name': 'pop',
        'option_text': 'element at the given index',
        'desc': 'Removes and returns the element at the given index.',
        'text': 'nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.pop(0) # 2<br>nums # [3, 4, 5]<br><br>nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.pop(2) # 4<br>nums # [2, 3, 5]'
      },
      'remove': {
        'name': 'remove',
        'link_name': 'remove',
        'option_text': 'the element from the list',
        'desc': 'Searches for the first instance of the given element and removes it (throws ValueError if not present)',
        'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br>nums.remove(2) <br>nums # [2, 3, 4, 5, 5]<br><br>nums.remove(4) <br>nums # [2, 3, 5, 5]'
      },
      'delete': {
        'name': 'delete',
        'link_name': 'delete',
        'option_text': 'all occurences of a specific element',
        'desc': 'Delete all items from the list that are equal to the given element.',
        'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br> # Using list comprehension <br>nums = [val for val in nums if val != 2]<br>nums # [3, 4, 5, 5]<br>'
      },
      'uniq': {
        'name': 'uniq',
        'link_name': 'uniq',
        'option_text': 'duplicate elements',
        'desc': 'Returns a copy of the original list with all duplicate elements removed.',
        'text': "nums = [5, 4, 5, 1, 7, 5, 1] # [5, 4, 5, 1, 7, 5, 1]<br> # convert the list to set<br>nums = set(num) # (1, 4, 5, 7)<br> # convert it back to list<br>nums = list(nums) # [1, 4, 5, 7]"
      }
    }
  },
  'find': {
    'option_text': 'find elements',
    'action_text': 'I need to find: ',
    'selector_id': 'sel-find',
    'data': {
      'specific': {
        'name': 'specific',
        'link_name': 'specific',
        'option_text': 'an element at a specific position',
        'desc': 'Returns the element at the specified index(es)',
        'text': "nums = [12, 13, [14, 15]] # [12, 13, [14, 15]]<br>nums[0] # 12<br>nums[2][1] # 15"
      },
      'include': {
        'name': 'include',
        'link_name': 'include-3F',
        'option_text': 'whether a certain element exists',
        'desc': 'Returns true if the given object is in the List. otherwise, returns false',
        'text': 'nums = [1, 4, 5, 7, [3, 8]] # [1, 4, 5, 7, [3, 8]]<br>4 in nums # True<br>3 in nums # False'
      }
    }
  },
  'sort': {
    'option_text': 'order the array',
    'action_text': 'I need to: ',
    'selector_id': 'sel-sort',
    'data': {
      'reverse': {
        'name': 'reverse',
        'link_name': 'reverse',
        'option_text': 'reverse the list',
        'desc': "The reverse() function doesn't take any argument. The reverse() function doesn't return any value. It only reverses the elements and updates the list.",
        'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.reverse()<br>nums # [6, 4, 5]"
      },
      'sort': {
        'name': 'sort',
        'link_name': 'sort',
        'option_text': 'sort all the list elements',
        'desc': "sort() method doesn't return any value. Rather, it changes the original list.",
        'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.sort()<br>nums # [4, 5, 6]<br>"
      }
    }
  },
  'other': {
    'option_text': 'do something else',
    'action_text': 'I need to: ',
    'selector_id': 'sel-other',
    'data': {
      'length': {
        'name': 'length',
        'link_name': 'length',
        'option_text': 'find the length of a list',
        'desc': 'Returns the length of an array. Length may be 0.',
        'text': "nums = [4, 5, 6] # [4, 5, 6]<br>len(nums) # 3"
      },
      'clear': {
        'name': 'clear',
        'link_name': 'clear',
        'option_text': "empties the given list, doesn't return any value",
        'desc': 'The clear() method modifies and clears the given  list',
        'text': 'nums = [4, 5, 6] # [4, 5, 6]<br>nums.clear()<br>nums # []<br>'
      },
      'count': {
        'name': 'count',
        'link_name': 'count',
        'option_text': 'find the the number of occurrences of an element in a list.',
        'desc': 'The count() method returns the number of occurrences of an element in a list.',
        'text': 'nums = [2, 2, 5, 4, 5, 5] # [2, 2, 5, 4, 5, 5]<br>nums.count(2) # 2<br>nums.count(5) # 3'
      }
    }
  }
};

var explorerData = {
  'en': explorerDataEn
}
