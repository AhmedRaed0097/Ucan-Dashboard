export default function useMultiField() {
    const studyTraining = reactive([]);

    const addNewStudyTraining = () => {
        let isThereEmptyValue = false;
        if (studyTraining.length) {
          studyTraining.forEach((element) => {
            console.log(element);
            Object.values(element).forEach((value) => {
              if (!value.length) {
                isThereEmptyValue = true;
              }
              console.log(value);
            });
          });
          if (isThereEmptyValue) {
            alert('يجب عليك ملئ الحقول السابقة اولاً!');
      
            return;
          }
        }
        const object = {
          donor: '',
          major: '',
          year: '',
        };
      
        studyTraining.push(object);
      };

      return{
        studyTraining,
        addNewStudyTraining
      }
}
