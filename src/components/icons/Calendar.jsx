import React from "react";

function Calendar({ className }) {
  return (
    <svg
      className={className}
      width={17}
      height={17}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.1835 0.80653L12.1844 1.43122C14.627 1.61113 16.2405 3.17534 16.2431 5.57414L16.2528 12.5956C16.2563 15.211 14.5079 16.8202 11.7055 16.8243L4.86006 16.8327C2.07514 16.836 0.304902 15.1885 0.3014 12.5656L0.291769 5.62662C0.288267 3.21199 1.84488 1.65194 4.28749 1.44121L4.28662 0.816525C4.28574 0.450042 4.57465 0.174347 4.95987 0.174347C5.34508 0.173514 5.63399 0.448376 5.63487 0.814859L5.63574 1.3979L10.8361 1.39124L10.8353 0.808196C10.8344 0.441713 11.1233 0.16685 11.5085 0.166018C11.885 0.165185 12.1826 0.440047 12.1835 0.80653ZM1.64089 5.88399L14.8958 5.86733V5.57581C14.8581 3.78504 13.9021 2.84551 12.1861 2.70558L12.187 3.34692C12.187 3.70508 11.8902 3.9891 11.5138 3.9891C11.1285 3.98994 10.8388 3.70674 10.8388 3.34859L10.8379 2.67393L5.63749 2.68059L5.63837 3.35442C5.63837 3.71341 5.35033 3.9966 4.96512 3.9966C4.5799 3.99743 4.29012 3.71507 4.29012 3.35609L4.28924 2.71474C2.58204 2.87549 1.63739 3.81835 1.64002 5.62495L1.64089 5.88399ZM11.1452 9.66959V9.67875C11.1539 10.0619 11.4866 10.3526 11.8902 10.3443C12.2842 10.3351 12.5985 10.0178 12.5897 9.63461C12.5714 9.26813 12.2553 8.96911 11.8622 8.96994C11.4595 8.97827 11.1443 9.28645 11.1452 9.66959ZM11.8683 13.4094C11.4656 13.4011 11.1408 13.0854 11.1399 12.7022C11.1312 12.3191 11.4542 12.0018 11.857 11.9926H11.8657C12.2772 11.9926 12.6107 12.3083 12.6107 12.6997C12.6116 13.0912 12.2789 13.4086 11.8683 13.4094ZM7.53818 9.68292C7.55569 10.0661 7.88925 10.3651 8.29197 10.3484C8.68594 10.3309 9.00024 10.0144 8.98273 9.63128C8.9731 9.25646 8.64917 8.96494 8.2552 8.96578C7.85248 8.98244 7.5373 9.29978 7.53818 9.68292ZM8.29547 13.3719C7.89275 13.3886 7.56006 13.0895 7.54168 12.7064C7.54168 12.3233 7.85598 12.0068 8.2587 11.9893C8.65267 11.9884 8.97748 12.28 8.98623 12.6539C9.00462 13.0379 8.68944 13.3544 8.29547 13.3719ZM3.93117 9.71207C3.94868 10.0952 4.28224 10.3951 4.68496 10.3776C5.07893 10.3609 5.39323 10.0436 5.37485 9.66043C5.36609 9.28562 5.04216 8.9941 4.64732 8.99493C4.24459 9.01159 3.93029 9.32893 3.93117 9.71207ZM4.68847 13.3761C4.28574 13.3936 3.95306 13.0937 3.93467 12.7106C3.9338 12.3274 4.24897 12.0101 4.65169 11.9934C5.04566 11.9926 5.37047 12.2841 5.37922 12.6589C5.39761 13.0421 5.08331 13.3594 4.68847 13.3761Z'
      />
    </svg>
  );
}

export default Calendar;
