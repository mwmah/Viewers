const displayFunction = data => {
  debugger;
  let meanValue = '';
  if (data.meanStdDev && data.meanStdDev.mean && !isNaN(data.meanStdDev.mean)) {
    meanValue = data.meanStdDev.mean.toFixed(2) + ' HU';
  }
  return meanValue;
};

export const freehandRoi = {
  id: 'FreehandRoi',
  name: 'Freehand',
  toolGroup: 'allTools',
  cornerstoneToolType: 'FreehandRoi',
  options: {
    measurementTable: {
      displayFunction,
    },
    caseProgress: {
      include: true,
      evaluate: true,
    },
  },
};
