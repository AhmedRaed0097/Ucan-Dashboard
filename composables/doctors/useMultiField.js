export default function useMultiField() {
    const studyTraining = reactive([]);

    const addNewStudyTraining = () => {
        let isThereEmptyValue = false;
        if (studyTraining.length) {
          studyTraining.forEach((element) => {
            Object.values(element).forEach((value) => {
              if (!value.length) {
                isThereEmptyValue = true;
              }
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
