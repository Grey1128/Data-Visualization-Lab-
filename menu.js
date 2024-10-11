const labList = document.getElementById('lab-list');
const labs = [
    {
        title: 'Lab 1',
        subLabs: [
            { title: 'Lab 1.1', filePath: 'Lab_1/Lab_1.1.html' },
            { title: 'Lab 1.2', filePath: 'Lab_1/Lab_1.2.html' },
            { title: 'Lab 1.3', filePath: 'Lab_1/Lab_1.3.html' },
        ],
    },
    {
        title: 'Lab 2',
        subLabs: [
            { title: 'Lab 2.1', filePath: 'Lab_2/Lab_2.1.html' },
            { title: 'Lab 2.2', filePath: 'Lab_2/Lab_2.2.html' },
            { title: 'Lab 2.3', filePath: 'Lab_2/Lab_2.3.html' },
            { title: 'Lab 2.4', filePath: 'Lab_2/Lab_2.4.html' },
        ],
    },
    {
        title: 'Lab 3',
        subLabs: [
            {title: 'Lab 3.1', filePath: 'Lab_3/Lab_3.1.html'},
            {title: 'Lab 3.2', filePath: 'Lab_3/Lab_3.2.html'},
        
        ],
    },
    {
        title: 'Lab 5',
        subLabs: [
            {title: 'Lab 5.1', filePath: 'Lab_5/Lab_5.1.html'},
            {title: 'Lab 5.2', filePath: 'Lab_5/Lab_5.2.html'},
            {title: 'Lab 5.3', filePath: 'Lab_5/Lab_5.3.html'},
        ],
    },
    {
        title: 'Lab 6',
        subLabs: [
            {title: 'Lab 6.1', filePath: 'Lab_6/Lab_6.1.html'},
            {title: 'Lab 6.2', filePath: 'Lab_6/Lab_6.2.html'},
        ],
    },
    {
        title: 'Lab 7',
        subLabs: [
            {title: 'Lab 7.1', filePath: 'Lab_7/Lab_7.1.html'},
            {title: 'Lab 7.2', filePath: 'Lab_7/Lab_7.2.html'},
            {title: 'Lab 7.3', filePath: 'Lab_7/Lab_7.3.html'},
        ],
    },
];

labs.forEach((lab, index) => {
    const labListItem = document.createElement('li');
    const labHeading = document.createElement('h2');
    labHeading.textContent = lab.title;
    labListItem.appendChild(labHeading);

    const subLabList = document.createElement('ul');
    lab.subLabs.forEach((subLab) => {
        const subLabListItem = document.createElement('li');
        const subLabLink = document.createElement('a');
        subLabLink.href = subLab.filePath;
        subLabLink.textContent = subLab.title;
        subLabListItem.appendChild(subLabLink);
        subLabList.appendChild(subLabListItem);
    });

    labListItem.appendChild(subLabList);
    labList.appendChild(labListItem);
});
