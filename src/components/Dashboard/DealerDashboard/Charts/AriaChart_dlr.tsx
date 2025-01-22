"use client"
import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

import YearPicker from '@/components/ui/YearPicker';



interface ChartOneState {
    series: {
        name: string;
        data: number[];
    }[];
}

const AriaChart_dlr = React.memo(({ year, setyear, data, title }: { year: null | number, setyear: React.Dispatch<React.SetStateAction<null | number>>, data: { month: string, totalViews: number }[], title: string }) => {

    const options: ApexOptions = {
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#0c1011'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 335,
            type: 'area',
            dropShadow: {
                enabled: true,
                color: '#623CEA14',
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },

            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [1, 1],
            curve: 'straight',
        },
        // labels: {
        //   show: false,
        //   position: "top",
        // },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 2.5,
            colors: '#fff',
            strokeColors: ['#383838'],
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: 'category',
            categories: data?.map(i => i?.month),
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                style: {
                    fontSize: '0px',
                },
            },
            min: 0,
            max: 100,
        },
    };

    return (
        <div>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-3 md:px-5 pt-3 md:pt-7.5 pb-3 md:pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
                <div className="flex flex-col md:flex-row flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                    <h6 className='font-poppins text-lg text-primary'>{title}</h6>
                    <div className="flex justify-end">
                        <YearPicker selectedYear={year} setSelectedYear={setyear}/>
                    </div>
                </div>

                <div>
                    <div id="chartOne" className="-ml-5">
                        <ReactApexChart
                            options={options}
                            series={[
                                {
                                    name: 'Views',
                                    data: data?.map(i => i?.totalViews),
                                }
                            ]}
                            type="area"
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
});

AriaChart_dlr.displayName = 'AriaChart_dlr';
export default AriaChart_dlr;