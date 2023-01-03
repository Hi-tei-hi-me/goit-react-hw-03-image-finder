import toast from 'react-hot-toast';

const toastConfig = {
  editorsChoice: {
    icon: '✯',
    style: {
      background: '#AA5585',
      color: '#fff',
    },
  },
  nothingFound: {
    icon: '☹',
    style: {
      background: '#4a81e8',
      color: '#fff',
    },
  },
  found: {
    icon: '✓',
    style: {
      background: '#537D43',
      color: '#fff',
    },
  },
  repeatedQuery: {
    icon: '👀',
    style: {
      background: '#de6a0a',
      color: '#fff',
    },
  },
  incorrectQuery: {
    icon: '⚠',
    style: {
      background: '#f3dc5d',
    },
  },
};

export const showToast = (text, type) => {
  toast(text, toastConfig[type]);
};
