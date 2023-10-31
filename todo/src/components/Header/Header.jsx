import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                  filter === value && styles.selected
                  // 전달된 filter의 값이 버튼의 값이 같다면 'selected' className 추가
              }`}
              onClick={() => onFilterChange(value)}
              >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}