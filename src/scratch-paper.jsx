            {/* <PieChart
              data={[
                {title: 'No idea', percentage: pointsObj['0'], value: pointsObj['0']},
                {title: 'Random guess', percentage: pointsObj['1'], value: pointsObj['1']},
                {title: 'Confident guess', percentage: pointsObj['2'], value: pointsObj['2']},
                {title: 'Certain', percentage: pointsObj['3'], value: pointsObj['3']},
              ]}
              visibleSegments={[
                {title: 'No idea', percentage: pointsObj['0'], value: pointsObj['0']},
                {title: 'Random guess', percentage: pointsObj['1'], value: pointsObj['1']},
                {title: 'Confident guess', percentage: pointsObj['2'], value: pointsObj['2']},
                {title: 'Certain', percentage: pointsObj['3'], value: pointsObj['3']},
              ]}
              segmentDescription={(datum, sum) =>
                `${datum.value} units, ${(
                  (datum.value / sum) *
                  100
                ).toFixed(0)}%`
              }
              i18nStrings={{
                detailsValue: "Value",
                detailsPercentage: "Percentage",
                filterLabel: "Filter displayed data",
                filterPlaceholder: "Filter data",
                filterSelectedAriaLabel: "selected",
                detailPopoverDismissAriaLabel: "Dismiss",
                legendAriaLabel: "Legend",
                chartAriaRoleDescription: "pie chart",
                segmentAriaRoleDescription: "segment"
              }}
              ariaDescription="Donut chart showing generic example data."
              ariaLabel="Donut chart"
              errorText="Error loading data."
              innerMetricDescription="total units"
              innerMetricValue="100"
              loadingText="Loading chart"
              recoveryText="Retry"
              size="large"
              variant="donut"
              empty={
                <Box textAlign="center" color="inherit">
                  <b>No data available</b>
                  <Box variant="p" color="inherit">
                    There is no data available
                  </Box>
                </Box>
              }
              noMatch={
                <Box textAlign="center" color="inherit">
                  <b>No matching data</b>
                  <Box variant="p" color="inherit">
                    There is no matching data to display
                  </Box>
                  <Button>Clear filter</Button>
                </Box>
              }
            /> */}
            {/* <BarChart
              series={[
                {
                  title: collectionName,
                  type: 'bar',
                  data: resultData,
                  valueFormatter: e => e,
                },
                {
                  title: 'Average score',
                  type: 'threshold',
                  y: totalPoints,
                  valueFormatter: e => e,
                }
              ]}
              xDomain={[
                'No idea',
                'Random guess',
                'Confident guess',
                'Certain',
              ]}
              yDomain={[0, cardList.length]}
              i18nStrings={{
                filterLabel: "Filter displayed data",
                filterPlaceholder: "Filter data",
                filterSelectedAriaLabel: "selected",
                detailPopoverDismissAriaLabel: "Dismiss",
                legendAriaLabel: "Legend",
                chartAriaRoleDescription: "Bar chart",
                xTickFormatter: e => e.toString(),
                yTickFormatter: e => e.toString(),
              }}
              ariaLabel="Single data series bar chart"
              errorText="Error loading data."
              height={300}
              loadingText="Loading chart"
              recoveryText="Retry"
              xScaleType="categorical"
              yScaleType="linear"
              xTitle="Confidence level"
              yTitle="Total answers"
              empty={
                <Box textAlign="center" color="inherit">
                  <b>No data available</b>
                  <Box variant="p" color="inherit">
                    There is no data available
                  </Box>
                </Box>
              }
              noMatch={
                <Box textAlign="center" color="inherit">
                  <b>No matching data</b>
                  <Box variant="p" color="inherit">
                    There is no matching data to display
                  </Box>
                  <Button>Clear filter</Button>
                </Box>
              }
            /> */}


                        {/* <PieChart
              data={[
                { title: "Item A", percentage: 40, value: 40 },
                { title: "Item B", percentage: 25, value: 25 },
                { title: "Item C", percentage: 20, value: 20 },
                { title: "Item D", percentage: 10, value: 10 },
                { title: "Item E", percentage: 5, value: 5 }
              ]}
              visibleSegments={[
                { title: "Item A", percentage: 40, value: 40 },
                { title: "Item B", percentage: 25, value: 25 },
                { title: "Item C", percentage: 20, value: 20 },
                { title: "Item D", percentage: 10, value: 10 },
                { title: "Item E", percentage: 5, value: 5 }
              ]}
              segmentDescription={(datum, sum) =>
                `${datum.value} units, ${(
                  (datum.value / sum) *
                  100
                ).toFixed(0)}%`
              }
              i18nStrings={{
                detailsValue: "Value",
                detailsPercentage: "Percentage",
                filterLabel: "Filter displayed data",
                filterPlaceholder: "Filter data",
                filterSelectedAriaLabel: "selected",
                detailPopoverDismissAriaLabel: "Dismiss",
                legendAriaLabel: "Legend",
                chartAriaRoleDescription: "pie chart",
                segmentAriaRoleDescription: "segment"
              }}
              ariaDescription="Donut chart showing generic example data."
              ariaLabel="Donut chart"
              errorText="Error loading data."
              innerMetricDescription="total units"
              innerMetricValue="100"
              loadingText="Loading chart"
              recoveryText="Retry"
              size="large"
              variant="donut"
              empty={
                <Box textAlign="center" color="inherit">
                  <b>No data available</b>
                  <Box variant="p" color="inherit">
                    There is no data available
                  </Box>
                </Box>
              }
              noMatch={
                <Box textAlign="center" color="inherit">
                  <b>No matching data</b>
                  <Box variant="p" color="inherit">
                    There is no matching data to display
                  </Box>
                  <Button>Clear filter</Button>
                </Box>
              }
            />


            {/* <PieChart
              data={[
                { title: "Item A", percentage: 40, value: 40 },
                { title: "Item B", percentage: 25, value: 25 },
                { title: "Item C", percentage: 20, value: 20 },
                { title: "Item D", percentage: 10, value: 10 },
                { title: "Item E", percentage: 5, value: 5 }
              ]}
              visibleSegments={[
                { title: "Item A", percentage: 40, value: 40 },
                { title: "Item B", percentage: 25, value: 25 },
                { title: "Item C", percentage: 20, value: 20 },
                { title: "Item D", percentage: 10, value: 10 },
                { title: "Item E", percentage: 5, value: 5 }
              ]}
              segmentDescription={(datum, sum) =>
                `${datum.value} units, ${(
                  (datum.value / sum) *
                  100
                ).toFixed(0)}%`
              }
              i18nStrings={{
                detailsValue: "Value",
                detailsPercentage: "Percentage",
                filterLabel: "Filter displayed data",
                filterPlaceholder: "Filter data",
                filterSelectedAriaLabel: "selected",
                detailPopoverDismissAriaLabel: "Dismiss",
                legendAriaLabel: "Legend",
                chartAriaRoleDescription: "pie chart",
                segmentAriaRoleDescription: "segment"
              }}
              ariaDescription="Donut chart showing generic example data."
              ariaLabel="Donut chart"
              errorText="Error loading data."
              innerMetricDescription="total units"
              innerMetricValue="100"
              loadingText="Loading chart"
              recoveryText="Retry"
              size="large"
              variant="donut"
              empty={
                <Box textAlign="center" color="inherit">
                  <b>No data available</b>
                  <Box variant="p" color="inherit">
                    There is no data available
                  </Box>
                </Box>
              }
              noMatch={
                <Box textAlign="center" color="inherit">
                  <b>No matching data</b>
                  <Box variant="p" color="inherit">
                    There is no matching data to display
                  </Box>
                  <Button>Clear filter</Button>
                </Box>
              }
            /> */}





            { x: 'No idea', y: 34503 },
            { x: 'Random guess', y: 25832 },
            { x: 'Confident guess', y: 4012 },
            { x: 'Certain', y: -5602 },


            xDomain={[
              new Date(1601100000000),
              new Date(1601107200000),
              new Date(1601114400000),
              new Date(1601121600000),
              new Date(1601128800000)
            ]}